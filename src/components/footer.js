import React from "react";
import { Link } from "gatsby";
import { EmailButton, LinkedInButton } from "./icon_button";

const Footer = ({ email, linkedIn, instagram }) => {
  return (
    <footer className="footer bg-gray-900 relative pt-1">
      <div className="container max-w-7xl mx-auto px-6 gap-x-16 grid grid-cols-5 py-16">
        <div className="col-span-2">
          <h6 className="text-white">Delaney Nicol Online Portfolio</h6>
          <div className="h-1 w-4 bg-pink-300 mt-2"></div>
          <p className="mt-8 text-white">
            Website Designed and developed by Mark Barton. (With Gatsby and
            Contentful.)
          </p>
          <div className="container grid grid-cols-6 mt-8">
            <LinkedInButton />
            <EmailButton />
          </div>
        </div>
        <div>
          <h6 className="text-white">Site Map</h6>
          <div className="h-1 w-4 bg-pink-300 mt-2"></div>
          <ul className="leading-8 mt-4">
            <li>
              <Link
                className="text-white opacity-80"
                href={linkedIn}
                target="_blank"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-80"
                href={linkedIn}
                target="_blank"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-80"
                href={linkedIn}
                target="_blank"
              >
                404
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-white">Socials</h6>
          <div className="h-1 w-4 bg-pink-300 mt-2"></div>

          <ul className="leading-8 mt-4">
            <li>
              <Link
                className="text-white opacity-80"
                href={linkedIn}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-80"
                href={instagram}
                target="_blank"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link className="text-white opacity-80" href={"mailto:" + email}>
                Email
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-white">Technology</h6>
          <div className="h-1 w-4 bg-pink-300 mt-2"></div>

          <ul className="leading-8 mt-4">
            <li>
              <Link
                className="text-white opacity-80"
                to="https://reactjs.org/"
                target="_blank"
              >
                React
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-80"
                to="https://www.gatsbyjs.com/"
                target="_blank"
              >
                Gatsby
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-80"
                to="https://www.contentful.com/"
                target="_blank"
              >
                Contentful
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-80"
                to="https://graphql.org/"
                target="_blank"
              >
                Graphql
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
