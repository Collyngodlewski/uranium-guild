import React from "react";

export default function GuildApplyPage() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Guild Application Survey</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            What is your name?
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            What is your email?
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="reason" className="block font-medium mb-1">
            Why do you want to join the guild?
          </label>
          <textarea
            id="reason"
            name="reason"
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </main>
  );
}