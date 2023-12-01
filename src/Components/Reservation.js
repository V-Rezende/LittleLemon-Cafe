
function Reservations () {
    return (
        <div>
            <div className="form">
                <h1>Reserve a Table for your spacial ocasion:</h1>

                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required/>

                    <label for="date">Preferred Date:</label>
                    <input type="date" id="date" name="date" required/>

                    <label for="time">Preferred Time:</label>
                    <input type="time" id="time" name="time" required/>

                    <label for="guests">Number of Guests:</label>
                    <select id="guests" name="guests" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <button type="submit">Book Table</button>
            </div>
        </div>
        
    )
}

export default Reservations;