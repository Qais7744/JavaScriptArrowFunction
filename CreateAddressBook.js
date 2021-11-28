{
    //UC 1 Creating addressbook
    class Contact {
        //properties
        FirstName;
        LastName;
        Address;
        City;
        State;
        Zip;
        PhoneNumber;
        Email;

        //constructor with undefiend number of parameters
        constructor(...params) {
            this.FirstName = params[0];
            this.LastName = params[1];
            this.Address = params[2];
            this.City = params[3];
            this.State = params[4];
            this.Zip = params[5];
            this.PhoneNumber = params[6];
            this.Email = params[7];
        }

        get FirstName() { return this._FirstName; }
        set(FirstName) { this._Firstname = FirstName; }

        get LastName() { return this._LastName; }
        set(LastName) { this._Lastname = LastName; }

        get Address() { return this._Address; }
        set(Address) { this._Address = Address; }

        get City() { return this._City; }
        set(City) { this._City = City; }

        get State() { return this._State; }
        set(State) { this._State = State; }

        get Zip() { return this._Zip; }
        set(Zip) { this._Zip = Zip; }

        get PhoneNumber() { return this._PhoneNumber; }
        set(PhoneNumber) { this._PhoneNumber = PhoneNumber; }

        get Email() { return this._Email; }
        set(Email) { this.Email = Email; }

        toString() {
            return "First Name =" + this.FirstName + ", Last Name = " + this.LastName + ",Address = " + this.Address + ",City = " + this.City + ",State = " + this.State + ",Zip = " + this.Zip + ",PhoneNumber = " + this.PhoneNumber + ",Email = " + this.Email;
        }
    }
    let personContact = new Contact("Altamash", "Bagwan", "Mahat Galli", "Nipani", "Karnataka", "591237", "7744918893", "altamashbagwan1@gmail.com");
    console.log(personContact.toString());
}