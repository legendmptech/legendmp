// "use client";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
//   Input,
//   Textarea,
// } from "@nextui-org/react";
// import { useState } from "react";
// import React from "react";
// import postContactForm from "../../lib/contact/post-contact-form";

// const ContactForm = () => {
//   const [isFormSent, setIsFormSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   return (
//     // <Card className="w-3/4 md:w-2/5 max-w-4xl">
//     //   <CardHeader>Contact Us</CardHeader>
//     //   <CardBody>
//     //     {isFormSent === false ? (
//     //       <form action="post" className="flex flex-col gap-4">
//     //         <Input
//     //           type="email"
//     //           label="Email"
//     //           inputMode="email"
//     //           id="contact_email"
//     //         />
//     //         <Input label="Name" id="contact_name" />
//     //         <Textarea
//     //           id="contact_message"
//     //           label="Message"
//     //           placeholder="Write up your Message"
//     //         />
//     //         <Button
//     //           color="secondary"
//     //           type="submit"
//     //           isLoading={isLoading}
//     //           isDisabled={isLoading}
//     //           onClick={async (e) => {
//     //             e.preventDefault();
//     //             setIsLoading(true);
//     //             await postContactForm().then(() => {
//     //               setIsFormSent(true);
//     //               setIsLoading(false);
//     //             });
//     //           }}
//     //         >
//     //           SUBMIT
//     //         </Button>
//     //       </form>
//     //     ) : (
//     //       <div className="">
//     //         <h2>Submitted</h2>
//     //         <p className="font-light">Thank for your Response</p>
//     //       </div>
//     //     )}
//     //   </CardBody>
//     // </Card>
//     <></>
//   );
// };

// export default ContactForm;
