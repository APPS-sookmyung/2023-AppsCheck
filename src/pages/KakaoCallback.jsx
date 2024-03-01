import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      // Perform actions with the code, such as sending it to your server for authentication
      console.log("Authorization code:", code);

      // Redirect to the home page upon successful login
      navigate("/home");
    } else {
      console.error("Authorization code is missing");
    }
  }, [navigate]);

  return <div></div>;
};

export default KakaoCallback;
