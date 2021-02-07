import React from "react";
import { Link } from "gatsby";
import { EmailButton, LinkedInButton } from "./icon_button";

const Footer = ({ email, linkedIn, instagram }) => {
  return (
    <footer className="footer bg-gray-600 relative pt-1">
      <div className="container max-w-7xl mx-auto px-6 gap-x-16 grid grid-cols-5 py-16">
        <div className="col-span-2">
          <p>Hello World</p>
          <p className="mt-8">
            Website Designed and developed by Mark Barton. (With Gatsby and
            Contentful.)
          </p>
          <div className="container grid grid-cols-6 mt-8">
            <LinkedInButton />
            <EmailButton />
          </div>
        </div>
        <div>
          <h6 className="text-white mb-4">Site Map</h6>
          <ul className="leading-8">
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
          <h6 className="text-white mb-4">Socials</h6>
          <ul className="leading-8">
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
          <h6 className="text-white mb-4">Technology</h6>
          <ul className="leading-8">
            <li>
              <Link className="text-white opacity-80">React</Link>
            </li>
            <li>
              <Link className="text-white opacity-80">Gatsby</Link>
            </li>
            <li>
              <Link className="text-white opacity-80">Contentful</Link>
            </li>
            <li>
              <Link className="text-white opacity-80">Graphql</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
