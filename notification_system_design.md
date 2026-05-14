stage 1 - Notifcation design 
system overview  : 
it allows users to recive the notfications instantly and view all the notifications  and delete notifications when needed 

core feauters 
1) send notifications 
2) view notifications 
3) mark notification as read 
4)real time notification updates 

SEND NOTIFICATIONS 
rest api end points 1;
1) POST/notification   --- use to create and send notification to user 
2) Request headers 
content-type: application/json

3) request body 
json{
    "title": "hii"
     "msg" : "how are u "
    "userid" = "user1"
}
4) response 

{
    "success" : true'
    "notificationid" : "notification1"
    "msg" : "sent succesfully"
}



GET ALL NOTIFICATIONS 
1) 
GET /notifications -- RETRIVE ALL NOTIFICATIONS 

2) request headers 

[
  {
    "id": "notif1",
    "title": "Payment Success",
    "message": "Your payment was completed successfully",
    "status": "unread"
  },
  {
    "id": "notif2",
    "title": "Order Shipped",
    "message": "Your order has been shipped",
    "status": "read"
  }
]


MARK NOTIFICATION READ 

PATCH/notification/:id/read   -- to update notification from read to unread 
2) Content-Type: application/json
response -- {
  "success": true,
  "message": "Notification marked as read"
}


DELETE NOTIFICATION 
DELETE/notifications/:id
Content-Type: application/json
response : {
  "success": true,
  "message": "Notification deleted successfully"
}



Architecture flow 
frontend -> rest api server -> notification servivce -> storage 