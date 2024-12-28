"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Card4 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <h2 style={{ fontSize: "40px", padding: "auto" }}>Bangladesh</h2>

          <p className="para">
            A 2500 years old ancient city is Pundranagar, whose remains were
            found in the Mahasthangar village of Bogra district in Bangladesh. I
            was lucky to witness the leftovers of early human history with my
            own eyes during my recent visit to Bogra
          </p>
          <Link href="/">
            <button
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                border: "2px solid white",
                borderRadius: "4px",
                padding: "3px",
              }}
            >
              Read <FaArrowRight size={1} style={{ display: "inline" }} />
            </button>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 26px;
    border-radius: 22px;
    color: #ffffff;
    overflow: hidden;
    background: #0a3cff;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::before {
    position: absolute;
    content: "";
    top: -4%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%);
    background: #ced8ff;
    z-index: -1;
    transform-origin: bottom;

    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::after {
    position: absolute;
    content: "";
    top: -8%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%);
    background: #e7ecff;
    z-index: -2;
    transform-origin: bottom;
    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content svg {
    width: 48px;
    height: 48px;
  }

  .content .para {
    z-index: 1;
    opacity: 1;
    font-size: 18px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .link {
    z-index: 1;
    color: #fea000;
    text-decoration: none;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .link:hover {
    text-decoration: underline;
  }

  .card:hover {
    transform: translate(0px, -16px);
  }

  .card:hover .content::before {
    rotate: -8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .card:hover .content::after {
    rotate: 8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }

  /* Responsive Styles */

  @media (max-width: 1024px) {
    .card {
      width: 95%;
      max-width: 350px;
      margin: 12% auto;
    }

    .content {
      padding: 20px;
    }

    .content h2 {
      font-size: 30px;
    }

    .content .para {
      font-size: 16px;
    }

    .read-more-btn {
      font-size: 20px;
    }
  }

  @media (max-width: 640px) {
    .card {
      width: 100%;
      max-width: 320px;
    }

    .content h2 {
      font-size: 26px;
    }

    .content .para {
      font-size: 14px;
    }

    .read-more-btn {
      font-size: 18px;
    }
  }
`;

export default Card4;
