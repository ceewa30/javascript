const testimonials = [
    {
        name: "John Doe, Customer",
        photoUrl: "https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        text: "With restuarant, we have finally accomplished things that have been waiting forever to get done.",

    },
    {
        name: "Cherise G, Customer",
        photoUrl: "https://plus.unsplash.com/premium_photo-1677252438425-e4125f74fbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        text: "I would recommend restuarant for anyone trying to get the word out about their business. It has saved me so much time!",
    },
    {
        name: "Rosetta Q",
        photoUrl: "https://plus.unsplash.com/premium_photo-1722176809011-7e5677562960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        text: "I love restuarant! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
    },
    {
        name: "Jack F",
        photoUrl: "https://plus.unsplash.com/premium_photo-1674904827855-2a8d8d5266ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text: "restuarant makes me more productive and gets the job done in a fraction of the time. I'm glad I found restuarant.",
    },
    {
        name: "Rick E",
        photoUrl: "https://plus.unsplash.com/premium_photo-1681433426886-3d6d17f79d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text: "I have been using restuarant for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
    }
]

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial();
function updateTestimonial () {
    const { name, photoUrl, text } =
    testimonials[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 5000);
}