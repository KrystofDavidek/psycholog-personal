import router from "next/router";

type Data = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const sendEmail = (data: Data) => {
  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("Fetch: ", res);
    res.status === 200 ? router.push("/contact") : router.push("/error");
  });
};
