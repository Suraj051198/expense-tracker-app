import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getExpense, updateExpense } from '../services/api';

const EditExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    date: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Available categories
  const categories = [
    'Food & Dining',
    'Transportation',
    'Entertainment',
    'Utilities',
    'Housing',
    'Healthcare',
    'Education',
    'Shopping',
    'Travel',
    'Personal Care',
    'Other'
  ];

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const data = await getExpense(id);
        // Format date for input type="date"
        const formattedDate = new Date(data.date).toISOString().split('T')[0];
        
        setFormData({
          amount: data.amount,
          category: data.category,
          description: data.description,
          date: formattedDate
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch expense details');
        setLoading(false);
      }
    };

    fetchExpense();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Convert amount to number
      const expenseData = {
        ...formData,
        amount: parseFloat(formData.amount)
      };

      await updateExpense(id, expenseData);
      navigate('/expenses');
    } catch (err) {
      setError('Failed to update expense. Please try again.');
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error && !submitting) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container">
      <h1 className="mb-4">Edit Expense</h1>

      {error && submitting && <div className="alert alert-danger mb-4">{error}</div>}

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="amount">Amount (₹)</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                step="0.01"
                required
                min="0.01"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
              ></textarea>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/expenses')}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                {submitting ? 'Updating...' : 'Update Expense'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditExpense; 