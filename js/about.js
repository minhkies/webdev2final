var form = document.querySelector(".contact-form form"),
    inpEmail = document.querySelector(".input_email"),
    inpFname = document.querySelector(".input_fname"),
    inpLname = document.querySelector(".input_lname"),
    inpSubject = document.querySelector(".input_subject"),
    inpMsg = document.querySelector(".input_msg");

const firebaseConfig = {
    apiKey: "AIzaSyD-Bw-oUF8kkdnCCt2KmTCNuTKlcturURc",
    authDomain: "web-dev-2-final.firebaseapp.com",
    databaseURL: "https://web-dev-2-final.firebaseio.com",
    projectId: "web-dev-2-final",
    storageBucket: "web-dev-2-final.appspot.com",
    messagingSenderId: "486668642465",
    appId: "1:486668642465:web:01426d00b8094517"
};

function firebasePush(input1, input2, input3, input4, input5) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    var mailsRef = firebase.database().ref('contacts').push().set({
        fname: input1.value,
        lname: input2.value,
        mail: input3.value,
        subj: input4.value,
        msg: input3.value

    });

}

if (form) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        firebasePush(inpFname, inpLname, inpEmail, inpSubject, inpMsg);
        return alert('Data Successfully Sent to Realtime Database');
    })
}