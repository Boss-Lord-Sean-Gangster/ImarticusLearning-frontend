import { useState, useEffect } from "react";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import { FaBookOpen, FaUsers, FaBriefcase } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom"; // Use useLocation for handling URL path
import DocumentViewer from "./DocumentViewer";
import SkeletonLoader from "./SkeletonLoader";

export default function Checkout() {
  const [courseDetails, setCourseDetails] = useState(null);
  const [discountCode, setDiscountCode] = useState("");
  const courseId = useParams().id;

  // Fetch course data based on the course ID
  useEffect(() => {
    if (!courseId) return; // Prevent fetch if no courseId is available

    fetch(`https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setCourseDetails(data))
      .catch((error) => console.error("Error fetching course data:", error));
  }, [courseId]);


   // Razorpay Payment Function
   const handlePayment = () => {
    if (!courseDetails) return;

    const options = {
      key: "rzp_test_lbGubwsxDLMmOW", // Replace with your Razorpay API Key
      amount: courseDetails.price * 100, // Convert amount to smallest unit (e.g., paise)
      currency: "INR",
      name: "Imarticus Learning",
      description: `Purchase of ${courseDetails.title}`,
      image: "https://example.com/logo.png", // Replace with your logo URL
      handler: function (response) {
        // Handle payment success
        console.log("Payment Successful!", response);
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Your Name", // Replace with user name
        email: "youremail@example.com", // Replace with user email
        contact: "9876543210", // Replace with user phone
      },
      notes: {
        course_id: courseId,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  

  // Show loading message while courseDetails is being fetched
  if (!courseDetails) {
    return <SkeletonLoader/>;
  }

  return (
    <div className="container py-5">
      <h1 className="h2 font-weight-semibold mb-4">Complete your purchase</h1>

      <div className="row g-4">
        {/* Main Content */}
        <div className="col-lg-8 col-12">
          <Card className="p-4">
            <div className="d-flex gap-4 mb-4 flex-column flex-md-row">
              <div className="bg-light rounded-lg" style={{ width: "192px", height: "128px" }}>
                <img
                  src={courseDetails.image} // Use course image dynamically
                  alt="Course thumbnail"
                  width={192}
                  height={128}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="h4 text-success">{courseDetails.title}</h2>
                <ul className="list-unstyled text-muted mt-3">
                  <li>{courseDetails.duration}</li>
                  <li>{courseDetails.description}</li>
                  <li>Created by: {courseDetails.instructor.name}</li>
                </ul>
              </div>
            </div>

            <div className="d-flex justify-content-between mb-4 flex-column flex-md-row">
              <div className="p-3 bg-light rounded-lg mb-3 mb-md-0">
                <FaBookOpen className="text-muted" style={{ width: "20px", height: "20px" }} />
                <span className="ms-2 text-muted">Lifetime Access to Course Material</span>
              </div>
              <div className="p-3 bg-light rounded-lg mb-3 mb-md-0">
                <FaUsers className="text-muted" style={{ width: "20px", height: "20px" }} />
                <span className="ms-2 text-muted">Mentorship and Internship Assistance</span>
              </div>
              <div className="p-3 bg-light rounded-lg">
                <FaBriefcase className="text-muted" style={{ width: "20px", height: "20px" }} />
                <span className="ms-2 text-muted">Industry Oriented Curriculum</span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="h5 font-weight-medium mb-3">Course Price</h3>
              <div className="d-flex gap-3 align-items-center">
                <div className="bg-light p-2 rounded-lg">
                  <span className="h5 font-weight-medium">₹ {courseDetails.price}</span> {/* Dynamic price */}
                </div>
                <InputGroup className="w-50">
                  <FormControl
                    placeholder="Have a discount code?"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                </InputGroup>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <p className="text-muted">Not sure about paying the amount at once? Pay using Monthly Fees</p>
              <Button variant="outline-success" className="border-success">
                View Plans
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4 col-12">
          <Card className="p-4">
            <h2 className="h4 font-weight-semibold mb-4">Billing Summary</h2>
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>Price</span>
                <span>₹{courseDetails.price}</span> {/* Dynamic price */}
              </div>
              <div className="d-flex justify-content-between">
                <span>Discount</span>
                <span>- ₹0</span>
              </div>
              <div className="border-top pt-3 d-flex justify-content-between font-weight-semibold">
                <span>TOTAL COST</span>
                <span>₹{courseDetails.price}</span> {/* Dynamic total cost */}
              </div>
            </div>

            <h3 className="h5 font-weight-medium mb-3">Select a Payment Method</h3>
            <div className="row g-3 mb-4">
              <div className="col-6">
                <Button variant="outline-secondary" className="w-100">
                  Debit Card
                </Button>
              </div>
              <div className="col-6">
                <Button variant="outline-secondary" className="w-100">
                  Credit Card
                </Button>
              </div>
              <div className="col-6">
                <Button variant="outline-secondary" className="w-100">
                  Net Banking
                </Button>
              </div>
              <div className="col-6">
                <Button variant="outline-secondary" className="w-100">
                  Wallet
                </Button>
              </div>
              <div className="col-12">
                <Button variant="outline-secondary" className="w-100">
                  Paytm
                </Button>
              </div>
            </div>

            <Button className="w-100 bg-success text-white h-12" onClick={handlePayment}>Pay ₹{courseDetails.price}</Button>

            <div className="d-flex justify-content-center mt-4">
              <img src="/placeholder.svg" alt="Secure checkout" width={100} height={32} className="opacity-50" />
            </div>
          </Card>
        </div>
      </div>
      <DocumentViewer courseId={courseId} />
    </div>
  );
}
