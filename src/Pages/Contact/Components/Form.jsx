import React, { useState } from "react"

const Form = () => {
  const [loading, setLoading] = useState(false)
  const [mailData, setMailData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const handleSubmit = () => {
    setLoading(true)
    fetch("/email-sent", {
      method: "POST",
      body: JSON.stringify(mailData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setLoading(false)
        if (json.messgae !== "Error") {
          setMailData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          })
          alert("Mail sent successfully. We will get back to you very shortly")
        } else {
          alert("Something went wrong, Please try again!")
        }
      })
      .catch(() => {
        setLoading(false)
      })
  }
  return (
    <div className="lg:w-4/6">
      <h1 className="text-white text-xl md:text-2xl mb-8">Send Us a Message</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="md:flex justify-between md:mb-5">
          <input
            value={mailData.name}
            onChange={(e) => {
              setMailData({ ...mailData, name: e.target.value })
            }}
            className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="text"
            placeholder="Name *"
            required
          />
          <input
            value={mailData.phone}
            onChange={(e) => {
              setMailData({ ...mailData, phone: e.target.value })
            }}
            className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="tel"
            placeholder="Phone"
          />
        </div>
        <div className="md:flex justify-between md:mb-5">
          <input
            value={mailData.email}
            onChange={(e) => {
              setMailData({ ...mailData, email: e.target.value })
            }}
            className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="email"
            placeholder="Email *"
            required
          />
          <input
            value={mailData.subject}
            onChange={(e) => {
              setMailData({ ...mailData, subject: e.target.value })
            }}
            className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="mb-5">
          <textarea
            rows={6}
            value={mailData.message}
            onChange={(e) => {
              setMailData({ ...mailData, message: e.target.value })
            }}
            className="text-base md:text-lg w-full resize-none outline-none text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="email"
            placeholder="Message *
         Note: You can also email us at talk@toggletechlab.com"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-gold text-base md:text-lg border-2 border-white rounded-3xl py-2 px-5"
        >
          {loading ? "Submitting..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}

export default Form
