Setting up an Elastic IP address:

An Elastic IP address is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet. For example, this allows you to connect to your instance from your local computer.

We currently do not support Elastic IP addresses for IPv6.

Contents

Elastic IP address basics
Working with Elastic IP addresses
Using reverse DNS for email applications
Elastic IP address limit
Elastic IP address basics
The following are the basic characteristics of an Elastic IP address:

To use an Elastic IP address, you first allocate one to your account, and then associate it with your instance or a network interface.

When you associate an Elastic IP address with an instance, it is also associated with the instance's primary network interface. When you associate an Elastic IP address with a network interface that is attached to an instance, it is also associated with the instance.

When you associate an Elastic IP address with an instance or its primary network interface, the instance's public IPv4 address (if it had one) is released back into Amazon's pool of public IPv4 addresses. You cannot reuse a public IPv4 address, and you cannot convert a public IPv4 address to an Elastic IP address. For more information, see Public IPv4 Addresses and External DNS Hostnames.

You can disassociate an Elastic IP address from a resource, and reassociate it with a different resource. Any open connections to an instance continue to work for a time even after you disassociate its Elastic IP address and reassociate it with another instance. We recommend that you reopen these connections using the reassociated Elastic IP address.

A disassociated Elastic IP address remains allocated to your account until you explicitly release it.

To ensure efficient use of Elastic IP addresses, we impose a small hourly charge if an Elastic IP address is not associated with a running instance, or if it is associated with a stopped instance or an unattached network interface. While your instance is running, you are not charged for one Elastic IP address associated with the instance, but you are charged for any additional Elastic IP addresses associated with the instance. For more information, see Amazon EC2 Pricing.

An Elastic IP address is for use in a specific network border group only.

When you associate an Elastic IP address with an instance that previously had a public IPv4 address, the public DNS host name of the instance changes to match the Elastic IP address.

We resolve a public DNS host name to the public IPv4 address or the Elastic IP address of the instance outside the network of the instance, and to the private IPv4 address of the instance from within the network of the instance.

When you allocate an Elastic IP address from an IP address pool that you have brought to your AWS account, it does not count toward your Elastic IP address limits.

When you allocate the Elastic IP addresses, you can associate the Elastic IP addresses with a network border group. This is the location from which we advertise the CIDR block. Setting the network border group limits the CIDR block to this group. If you do not specify the network border group, we set the border group containing all of the Availability Zones in the Region (for example, us-west-2).

Working with Elastic IP addresses
The following sections describe how you can work with Elastic IP addresses.

Tasks

Allocating an Elastic IP address
Describing your Elastic IP addresses
Tagging an Elastic IP address
Associating an Elastic IP address with a running instance or network interface
Disassociating an Elastic IP address
Releasing an Elastic IP address
Recovering an Elastic IP address
Allocating an Elastic IP address
You can allocate an Elastic IP address from Amazon's pool of public IPv4 addresses, or from a custom IP address pool that you have brought to your AWS account. For more information about bringing your own IP address range to your AWS account, see Bring Your Own IP Addresses (BYOIP).

You can allocate an Elastic IP address using one of the following methods.

New console

1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

2. In the navigation pane, choose Elastic IPs.

3. Choose Allocate Elastic IP address.

4. For Scope, choose either VPC or EC2-Classic depending on the scope in which it will be used.

5. (VPC scope only) For Public IPv4 address pool choose one of the following:

    a. Amazon's pool of IP addresses—If you want an IPv4 address to be allocated from Amazon's pool of IP addresses.

    b. My pool of public IPv4 addresses—If you want to allocate an IPv4 address from an IP address pool that you have brought to your AWS account. This option is disabled if you do not have any IP address pools.

    c. Customer owned pool of IPv4 addresses—If you want to allocate an IPv4 address from a pool created from your on-premises network for use with an AWS Outpost. This option is disabled if you do not have an AWS Outpost.

6. Choose Allocate.

Describing your Elastic IP addresses
You can describe an Elastic IP address using one of the following methods.

New console

To describe your Elastic IP addresses

1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

2. In the navigation pane, choose Elastic IPs.

3. Select the Elastic IP address to view and choose Actions, View details.

Tagging an Elastic IP address
You can assign custom tags to your Elastic IP addresses to categorize them in different ways, for example, by purpose, owner, or environment. This helps you to quickly find a specific Elastic IP address based on the custom tags that you assigned to it.

You can only tag Elastic IP addresses that are in the VPC scope.

Note
Cost allocation tracking using Elastic IP address tags is not supported.

You can tag an Elastic IP address using one of the following methods.

New console

To tag an Elastic IP address

1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

2. In the navigation pane, choose Elastic IPs.

3. Select the Elastic IP address to tag and choose Actions, View details.

4. In the Tags section, choose Manage tags.

5. Specify a tag key and value pair.

6. (Optional) Choose Add tag to add additional tags.

7. Choose Save.

Associating an Elastic IP address with a running instance or network interface
If you're associating an Elastic IP address with your instance to enable communication with the internet, you must also ensure that your instance is in a public subnet. For more information, see Internet Gateways in the Amazon VPC User Guide.

You can associate an Elastic IP address with an instance or network interface using one of the following methods.

New console

To associate an Elastic IP address with an instance

1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

2. In the navigation pane, choose Elastic IPs.

3. Select the Elastic IP address to associate and choose Actions, Associate Elastic IP address.

4. For Resource type, choose Instance.

5. For instance, choose the instance with which to associate the Elastic IP address. You can also enter text to search for a specific instance.

6. (Optional) For Private IP address, specify a private IP address with which to associate the Elastic IP address.

7. Choose Associate.

To associate an Elastic IP address with a network interface

1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

2. In the navigation pane, choose Elastic IPs.

3. Select the Elastic IP address to associate and choose Actions, Associate Elastic IP address.

4. For Resource type, choose Network interface.

5. For Network interface, choose the network interface with which to associate the Elastic IP address. You can also enter text to search for a specific network interface.

6. (Optional) For Private IP address, specify a private IP address with which to associate the Elastic IP address.

7. Choose Associate.

Disassociating an Elastic IP address
You can disassociate an Elastic IP address from an instance or network interface at any time. After you disassociate the Elastic IP address, you can reassociate it with another resource.

You can disassociate an Elastic IP address using one of the following methods.

New console

To disassociate and reassociate an Elastic IP address

1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

2. In the navigation pane, choose Elastic IPs.

3. Select the Elastic IP address to disassociate, choose Actions, Disassociate Elastic IP address.

4. Choose Disassociate.

Releasing an Elastic IP address
If you no longer need an Elastic IP address, we recommend that you release it using one of the following methods. The address that you release must not be associated with an instance.

New console

To release an Elastic IP address

1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

2. In the navigation pane, choose Elastic IPs.

3. Select the Elastic IP address to release and choose Actions, Release Elastic IP addresses.

4. Choose Release.

Recovering an Elastic IP address
If you have released your Elastic IP address, you might be able to recover it. The following rules apply:

You cannot recover an Elastic IP address if it has been allocated to another AWS account, or if it will result in your exceeding your Elastic IP address limit.

You cannot recover tags associated with an Elastic IP address.

You can recover an Elastic IP address using the Amazon EC2 API or a command line tool only.

AWS CLI

To recover an Elastic IP address

Use the allocate-address AWS CLI command and specify the IP address using the --address parameter as follows.

aws ec2 allocate-address --domain vpc --address 203.0.113.3
Using reverse DNS for email applications
If you intend to send email to third parties from an instance, we suggest that you provision one or more Elastic IP addresses and provide them to AWS. AWS works with ISPs and internet anti-spam organizations to reduce the chance that your email sent from these addresses will be flagged as spam.

In addition, assigning a static reverse DNS record to your Elastic IP address that is used to send email can help avoid having email flagged as spam by some anti-spam organizations. Note that a corresponding forward DNS record (record type A) pointing to your Elastic IP address must exist before we can create your reverse DNS record.

If a reverse DNS record is associated with an Elastic IP address, the Elastic IP address is locked to your account and cannot be released from your account until the record is removed.

To remove email sending limits, or to provide us with your Elastic IP addresses and reverse DNS records, go to the Request to Remove Email Sending Limitations page.

Elastic IP address limit
By default, all AWS accounts are limited to five (5) Elastic IP addresses per Region, because public (IPv4) internet addresses are a scarce public resource. We strongly encourage you to use an Elastic IP address primarily for the ability to remap the address to another instance in the case of instance failure, and to use DNS hostnames for all other inter-node communication.

To verify how many Elastic IP addresses are in use, open the Amazon EC2 console at https://console.aws.amazon.com/ec2/ and choose Elastic IPs from the navigation pane.

To verify your current account limit for Elastic IP addresses, do one of the following:

  Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/, choose Limits from the navigation pane, and enter IP in the search field.

  Open the Service Quotas console at https://console.aws.amazon.com/servicequotas/, enter Amazon EC2 in the search field, and choose Amazon Elastic Compute Cloud (Amazon EC2). Enter IP in the search field.

If you feel your architecture warrants additional Elastic IP addresses, you can request a quota increase directly from the Service Quotas console.

Tutorial link from: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html
