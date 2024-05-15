import React from 'react';

export const Documentation = () => {
  return (
    <div className="documentation-container py-12 px-6">
      <div className="documentation-content max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Professional Documentation for MoodInsight</h1>
        <p className="text-lg mb-4">MoodInsight is an advanced mental health assessment platform designed to provide personalized insights into emotional well-being. Developed through extensive research and utilizing state-of-the-art machine learning techniques, MoodInsight offers a comprehensive solution for users to gain understanding and support for their mental health.</p>
        
        <h2 className="text-2xl font-bold mb-4">Model Implementation</h2>
        <p className="text-lg mb-4">MoodInsight implements various machine learning models, including Multinomial Naive Bayes (MNB), Logistic Regression (LR), and Support Vector Machine (SVM). Features used for model training include TF-IDF, sentiment polarity, and LIWC 44 categories. Additionally, a novel approach utilizing LIWC 44 categories as labels/classes has been integrated.</p>
        <p className="text-lg mb-4">After rigorous experimentation, the MNB + TF-IDF + sentiment polarity model was selected for its superior accuracy. MoodInsight achieved an accuracy of 86.85%, surpassing the reference dataset's accuracy of 80.5%. Notably, MoodInsight achieved a precision of 97%, significantly outperforming the reference dataset's precision of approximately 84%.</p>
        
        <h2 className="text-2xl font-bold mb-4">User Interaction</h2>
        <p className="text-lg mb-4">Users can access MoodInsight through a user-friendly web interface. They can log in and sign up using their Google accounts, ensuring secure and convenient access to the platform.</p>
        <p className="text-lg mb-4">MoodInsight offers different user categories, including Peers and Psychiatrists. Users can enter anyone's Twitter ID, and the platform will retrieve their Twitter digit ID. The background model analyzes the user's tweets and generates a doughnut pie chart displaying emotional trends.</p>
        <p className="text-lg mb-4">Additionally, MoodInsight integrates the ChatGPT API, allowing users to receive personalized feedback based on their tweets. This feature enhances user engagement and provides valuable insights for self-reflection.</p>
        <p className="text-lg mb-4">For users who do not use Twitter, MoodInsight offers the Montgomery-Åsberg Depression Rating Scale (MADRS). This assessment tool enables users to evaluate their mental well-being by completing a simple form, providing an alternative pathway for accessing MoodInsight's services.</p>
        
        <h2 className="text-2xl font-bold mb-4">Usage Guide</h2>
        <p className="text-lg mb-4">- **Logging in:** Users can log in to MoodInsight using their Google accounts.<br />
        - **Signing up:** New users can sign up for MoodInsight using their Google accounts.<br />
        - **User Categories:** Users can select their category as Peer or Psychiatrist for tailored features.<br />
        - **Twitter ID Analysis:** Users can input a Twitter ID to analyze emotional trends based on the user's tweets.<br />
        - **ChatGPT Feedback:** Users can interact with the ChatGPT API to receive personalized feedback on their tweets.<br />
        - **MADRS Assessment:** Users without Twitter accounts can utilize the MADRS assessment tool for mental well-being evaluation.</p>
        
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg mb-4">MoodInsight represents a groundbreaking advancement in mental health technology, offering personalized insights and support for users' emotional well-being. With its innovative features and user-centric design, MoodInsight aims to empower individuals to take control of their mental health journey.</p>
      </div>
    </div>
  );
};

