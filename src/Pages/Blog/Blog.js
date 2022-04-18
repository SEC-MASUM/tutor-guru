import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto ">
      <div className=" grid grid-cols-3 gap-4 py-10">
        {/* Question 1 */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <Link to="">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Difference Between authentication and authorization
                </h5>
              </Link>
              <p className="font-normal text-gray-700 mb-3">
                <span>
                  <span className="font-bold">Authentication:</span>{" "}
                  Authentication is a process to verify who the user is .
                  Authentication is the first step to access the authorized
                  things. Users can change something about authentication.
                  Passwords, pins, email etc are the part of authentication.
                </span>
                <br />
                <span>
                  <span className="font-bold">Authorization:</span>{" "}
                  Authorization is the process to give the permission which can
                  access the user. Authorization is the second step after
                  verifying the authentication. It is controlled by the
                  organization. And it is about internal settings.
                </span>
              </p>
              
            </div>
          </div>
        </div>
        {/* Question 2 */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <Link to="">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </Link>
              <p className="font-normal text-gray-700 mb-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              
            </div>
          </div>
        </div>
        {/* Question 3 */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <Link to="">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  What other services does firebase provide other than
                  authentication?
                </h5>
              </Link>
              <p className="font-normal text-gray-700 mb-3">
                Here is a short list of services which firebase provides
                including authentication.
                <ul>
                  <li className="list-disc list-inside">Cloud Firestore.</li>
                  <li className="list-disc list-inside">Realtime Database.</li>
                  <li className="list-disc list-inside">Remote Config. </li>
                  <li className="list-disc list-inside">Firebase ML. </li>
                  <li className="list-disc list-inside">Cloud Functions.</li>
                  <li className="list-disc list-inside">Authentication.</li>
                  <li className="list-disc list-inside">Cloud Messaging.</li>
                  <li className="list-disc list-inside">Hosting.</li>
                  <li className="list-disc list-inside">Cloud Storage.</li>
                  <li className="list-disc list-inside">Crashlytics Google Analytics.</li>
                  <li className="list-disc list-inside">Performance Monitoring.</li>
                  <li className="list-disc list-inside">In-App Messaging</li>
                </ul>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
