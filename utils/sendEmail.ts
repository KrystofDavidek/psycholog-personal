type Data = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const sendEmail = async (data: Data): Promise<boolean> => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.status === 200;
};
