import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <div id="mc_embed_signup">
          <form
            action="https://linkedin.us19.list-manage.com/subscribe/post?u=7afb7748d806c305dc0bb53e1&amp;id=3b81882f80"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Subscribe</label>
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              ></div>
            </div>
          </form>
        </div>
      </div>
    )}
  />
);
