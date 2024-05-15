function skillsMember() {
    var user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
        uid = user.uid;
    }
    var db = firebase.firestore();
    var docRef = db.collection("users").doc(uid);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            var data = doc.data();
            var skills = data.skills;
            var skillsList = document.getElementById("skillsList");
            for (var i = 0; i < skills.length; i++) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(skills[i]));
                skillsList.appendChild(li);
            }
        } else {
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}