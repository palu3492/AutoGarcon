package auto_garcon.singleton;

import android.content.Context;
import android.content.SharedPreferences;

import com.example.auto_garcon.R;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class SharedPreference {
    private SharedPreferences sharedPreferences;
    private Context context;

    public SharedPreference(Context context){
        this.context = context;
        sharedPreferences = context.getSharedPreferences(context.getString(R.string.pref_file),Context.MODE_PRIVATE);
    }

    public void changeLogStatus(boolean status){
        SharedPreferences.Editor editor = sharedPreferences.edit();

        //editing preference file and changing login status to either false or true
        editor.putBoolean(context.getString(R.string.pref_login_status),status);
        //how you save???
        editor.apply();
    }

    //logs out user
    public void logOut(){
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.clear().apply();
    }

    public  boolean getLoginStatus(){
        // gets the login status from preference file
        return sharedPreferences.getBoolean(context.getString(R.string.pref_login_status), false);
    }

    public void setUser(UserSingleton user){
        SharedPreferences.Editor editor = sharedPreferences.edit();
        //this gson object is used to convert our java object into a json String
        Gson gson = new Gson();

        String stringJson = gson.toJson(user);

        // here we write the json object that represents our java object into our shared preference file
        editor.putString("UserSingleton", stringJson);
        //save edits
        editor.apply();
    }
    public UserSingleton getUser(){
        // this gson object will be used to convert our json string into a java object
        Gson gson = new Gson();
        //here we extract the json String from our sharedPreference file
        String stringJson = sharedPreferences.getString("UserSingleton", null);

        //here we convert the json String to our Java Object
        return gson.fromJson(stringJson, UserSingleton.class);
    }
    public String getAuth(){
        return sharedPreferences.getString(context.getString(R.string.pref_auth_token),"Token");
    }
    public  void setAuthToken(String authToken){
        SharedPreferences.Editor editor = sharedPreferences.edit();

        editor.putString(context.getString(R.string.pref_auth_token),authToken);
        editor.commit();
    }
    public ShoppingCartSingleton getShoppingCart(){
        // this gson object will be used to convert our json string into a java object
        Gson gson = new Gson();
        //here we extract the json String from our sharedPreference file
        String stringJson = sharedPreferences.getString("ShoppingCartSingleton", null);

        //here we convert the json String to our Java Object
        return gson.fromJson(stringJson, ShoppingCartSingleton.class);
    }

    public void setShoppingCart(ShoppingCartSingleton shoppingCart){
        SharedPreferences.Editor editor = sharedPreferences.edit();

        //this gson object is used to convert our java object into a json String
        Gson gson = new Gson();

        String stringJson = gson.toJson(shoppingCart);

        // here we write the json object that represents our java object into our shared preference file
        editor.putString("ShoppingCartSingleton", stringJson);
        //save edits
        editor.apply();
    }

    public List<Integer> getFavorites(){
        Gson gson = new Gson();
        String stringJson = sharedPreferences.getString("favorite restaurants", null);

        Type type = new TypeToken<List<Integer>>() {}.getType();
        List<Integer> toBeReturned = gson.fromJson(stringJson, type);
        return toBeReturned;
    }

    public void removeFromFavorites(int oldFavorite){
        SharedPreferences.Editor editor = sharedPreferences.edit();
        Gson gson = new Gson();
        String stringJson = sharedPreferences.getString("favorite restaurants", null);

        Type type = new TypeToken<List<Integer>>() {}.getType();
        List<Integer> converter = gson.fromJson(stringJson, type);

        if(converter.contains(oldFavorite)) {
            converter.remove(converter.indexOf(oldFavorite));
        }

        String returnJSONString = gson.toJson(converter);

        editor.putString("favorite restaurants", returnJSONString);
        editor.apply();
    }

    public void addToFavorites(int newFavorite){
        SharedPreferences.Editor editor = sharedPreferences.edit();
        Gson gson = new Gson();
        List<Integer> converter;
        String stringJson = sharedPreferences.getString("favorite restaurants", null);

        if(stringJson == null) {
            converter = new ArrayList<Integer>();
        }
        else {
            Type type = new TypeToken<List<Integer>>() {}.getType();
            converter = gson.fromJson(stringJson, type);
        }

        converter.add(newFavorite);

        String returnJSONString = gson.toJson(converter);

        editor.putString("favorite restaurants", returnJSONString);
        editor.apply();
    }
}