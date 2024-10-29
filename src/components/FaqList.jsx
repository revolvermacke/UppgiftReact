import React, { useEffect, useState } from 'react';

const FaqList = () => {
  const [faqs, setFaqs] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    
    fetchFaqs();
  }, []);

  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="faq-boxes">
      {faqs.map((faq) => (
        <div className={`FAQ-item ${expandedIds.includes(faq.id) ? 'expanded' : ''}`} key={faq.id}>
          <div className="dropdown-btn-container">
            <button
              className="dropdown-btn"
              aria-expanded={expandedIds.includes(faq.id)}
              aria-controls={`answer-${faq.id}`}
              onClick={() => toggleExpand(faq.id)}
            >
              <span className='faqQuestion'>{faq.title}</span>
              <i className="fa-solid fa-chevron-down btn-circle2 btn-darkmode"></i>
            </button>
          </div>
          <div
            className="FAQ-answer"
            id={`answer-${faq.id}`}
            style={{ display: expandedIds.includes(faq.id) ? 'block' : 'none' }}
          >
            <p>{faq.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
