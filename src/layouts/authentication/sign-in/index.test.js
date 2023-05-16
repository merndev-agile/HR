// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import MockFirebase from "firebase-mock";

// import Basic from "./index";

// const mockFirebase = new MockFirebase();

// firebase.initializeApp(mockFirebase.initializeApp());

// firebase.auth = mockFirebase.auth();

// firebase.firestore = mockFirebase.firestore();

// // Example test case using mock Firebase SDK

// // test("should do something with Firebase", () => {
// const mockUser = {
//   uid: "mockUserId",
//   email: "test123@gmail.com",
//   password: "abd123",
// };

// mockFirebase.auth().changeAuthState(mockUser);
// mockFirebase.auth().changeAuthState(null);

// // Mock Firestore
// const mockFirestore = mockFirebase.firestore();
// mockFirestore.collection("users").add({ name: "John" });
// // });

// test("check Remember me ", () => {
//   render(<Basic />);
//   const greetElement = screen.getByText(/Remember me/i);
//   expect(greetElement).toBeInTheDocument();
// });

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import { ThemeProvider } from "@mui/material/styles";
// import { createTheme } from "@mui/material/styles";
// import { rgba } from "polished";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "../../../Firebase/config";
import { MaterialUIControllerProvider, useMaterialUIController } from "../../../context/index";
import Basic from "./index";

// const theme = createTheme({});

// Mock the necessary dependencies
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../../Firebase/config", () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn().mockResolvedValue({}),
  },
}));

// jest.mock("@mui/material/styles", () => ({
//   ...jest.requireActual("@mui/material/styles"),
//   createTheme: jest.fn(() => theme),
// }));

// const mockTheme = createTheme({
//   palette: {
//     gradients: {
//       primary: {
//         main: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//         state: "color: red",
//       },
//       // Define other gradient variations if needed
//     },
//     grey: {
//       100: "#f5f5f5",
//       // Define other grey shades if needed
//     },
//     white: {
//       main: "#ffffff",
//     },
//     // Define other palette colors if needed
//   },
//   functions: {
//     linearGradient: () => {}, // Mocked linearGradient function
//     // Define other functions if needed
//   },
//   borders: {
//     borderRadius: {
//       xs: "4px",
//       // Define other border radius values if needed
//     },
//     // Define other border properties if needed
//   },
//   boxShadows: {
//     colored: {
//       xs: "0px 2px 5px 0px rgba(0, 0, 0, 0.12)",
//       // Define other colored shadow values if needed
//     },
//     // Define other box shadow values if needed
//   },
//   overlay: {
//     backgroundColor: transparent
//       ? transparentColor.main
//       : rgba(darkMode ? background.sidenav : white.main, 0.8), // Use rgba from polished
//     backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
//   },
// });

describe("Basic component", () => {
  beforeEach(() => {
    render(
      <Router>
        {/* <ThemeProvider theme={mockTheme}> */}
        <MaterialUIControllerProvider>
          <Basic />
        </MaterialUIControllerProvider>
        {/* </ThemeProvider> */}
      </Router>
      //   { theme }
    );
  });

  test("renders the sign-in form", () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByText("sign in");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
});
