import React, { useState } from "react";
import { registerUser } from "../../api/authApi";
import toast from "react-hot-toast";
import { User, Mail, Lock, Phone, Truck } from "lucide-react";
import { Link } from "react-router-dom"; // <-- make sure react-router-dom is installed

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "resident",
    plateNumber: "",
    vehicleType: "",
    vehicleStatus: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      toast.success("Registration successful!");
      console.log("REGISTER RESPONSE:", res);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-green-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Create an Account
        </h2>
        <p className="text-gray-500 text-center">
          Fill in your details to register
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            />
          </div>

          {/* ROLE */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          >
            <option value="resident">Resident</option>
            <option value="driver">Driver</option>
          </select>

          {/* VEHICLE FIELDS (DRIVER ONLY) */}
          {formData.role === "driver" && (
            <div className="space-y-3 mt-2">
              <div className="relative">
                <Truck className="absolute top-3 left-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="plateNumber"
                  placeholder="Vehicle Plate Number"
                  value={formData.plateNumber}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                />
              </div>

              <input
                type="text"
                name="vehicleType"
                placeholder="Vehicle Type (Truck, Van...)"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              />

              <select
                name="vehicleStatus"
                value={formData.vehicleStatus}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              >
                <option value="">Select Vehicle Status</option>
                <option value="available">Available</option>
                <option value="on-route">On Route</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
