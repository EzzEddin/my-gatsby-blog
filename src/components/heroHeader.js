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
        <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link>
        <div>
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
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_7afb7748d806c305dc0bb53e1_3b81882f80"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  class="btn btn-primary btn-xl"
                  type="submit"
                  value="Find out more"
                  name="subsSubscribecribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )}
  />
);
