import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './BookingForm.css';
import restaurant from "../images/restaurant.jpg";

export default function ReservationForm(props) {
  const navigate = useNavigate();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comments, setComments] = useState("");
  const [finalTime, setFinalTime] = useState([]);

  // Update finalTime each time props.availableTimes changes
  useEffect(() => {
    setFinalTime(props.availableTimes.map((time, index) => <option key={index}>{time}</option>));
  }, [props.availableTimes]);

  function handleDateChange(e) {
    setDate(e.target.value);
    const selectedDate = new Date(e.target.value);
    props.updateTimes(selectedDate);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmation");
  }

  return (
    <>
      <header className="reserve-table">
        <img
          className="header-reserve"
          src={restaurant}
          alt="Little Lemon Ingredients"
        />
        <div className="reserve-header-text">
          <h1>Reserve a table</h1>
        </div>
      </header>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fName">First Name</label><br />
          <input
            type="text"
            id="fName"
            placeholder="First Name"
            required
            minLength={2}
            maxLength={50}
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lName">Last Name</label><br />
          <input
            type="text"
            id="lName"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            id="email"
            placeholder="john@madeup.com"
            value={email}
            required
            minLength={4}
            maxLength={200}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phonenum">Phone Number</label><br />
          <input
            type="tel"
            id="phonenum"
            placeholder="(xxx)-xxx-xxxx"
            value={tel}
            required
            minLength={10}
            maxLength={25}
            pattern="^\(\d{3}\)-\d{3}-\d{4}$"
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="people">Number of People</label><br />
          <input
            type="number"
            id="people"
            placeholder="Number of People"
            value={people}
            required
            min={1}
            max={15}
            onChange={(e) => setPeople(parseInt(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="date">Select Date</label><br />
          <input
            type="date"
            id="date"
            required
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div>
          <label htmlFor="time">Select Time</label><br />
          <select id="time" required>
            {finalTime}
          </select>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label><br />
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>
        
        <div className="comments">
            <label htmlFor="comments">Additional Comments</label><br />
            <textarea
                id="comments"
                rows={8}
                cols={50}
                placeholder="Additional Comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
            ></textarea>
            </div>

            <div className="book-table">
            <button type="submit" className="action-button">
                Book Table
            </button>
            </div>
      </form>
    </>
  );
}
