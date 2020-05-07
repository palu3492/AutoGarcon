package auto_garcon.initialpages;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.LinearLayoutManager;

import android.content.Intent;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.example.auto_garcon.R;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;

import auto_garcon.homestuff.Home;
import auto_garcon.homestuff.HomeAdapter;
import auto_garcon.homestuff.RestaurantItem;
import auto_garcon.singleton.SharedPreference;
import auto_garcon.singleton.ShoppingCartSingleton;
import auto_garcon.singleton.VolleySingleton;

/** Initial loading screen. */
public class LoadingScreen extends AppCompatActivity {
    private SharedPreference pref;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_loading_screen);

        pref = new SharedPreference(LoadingScreen.this);
        ShoppingCartSingleton shoppingCart = new ShoppingCartSingleton();

        pref.setShoppingCart(shoppingCart);

        StringRequest getRequestForFavorites = new StringRequest(Request.Method.GET, "http://50.19.176.137:8000/favorites/" + pref.getUser().getUsername(),
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            JSONObject favoritesJSONObject = new JSONObject(response);
                            //parsing through json from get request to add them to menu
                            Iterator<String> keys = favoritesJSONObject.keys();
                            while(keys.hasNext()) {
                                String key = keys.next();

                                if (favoritesJSONObject.get(key) instanceof JSONObject) {
                                    JSONObject item = favoritesJSONObject.getJSONObject(key);

                                    pref.addToFavorites(Integer.parseInt(item.get("restaurant_id").toString()));
                                }
                            }
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        if(error.networkResponse.statusCode == 500) {
                            Log.d("Error in loading screen", "Error retrieving favorites");
                        }
                    }
                }
        );

        VolleySingleton.getInstance(LoadingScreen.this).addToRequestQueue(getRequestForFavorites);


        /** Waits for 3000 milliseconds then goes to login activity*/
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent toLogin = new Intent(LoadingScreen.this, Login.class);
                startActivity(toLogin);
                finish();
            }
        }, 3000);
    }
}
