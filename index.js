const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
const cohere = require('cohere-ai');
cohere.init('Wj58C5OkF4nHet3GmrNalKcRURbiphl74DKnay3X');
(async () => {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: 'Given a post, this program will generate relevant hashtags.\n\nPost: Why are there no country songs about software engineering\nHashtag: #softwareengineering\n--\nPost: Researcher motivated to apply education and abilities towards enhancing operations in all settings.\nHashtag: #research\n--\nPost: Proven track record of project and procedural data delivery. \nHashtag: #projectmanagement\n--\nPost: Excellent experience with administrative environments possessing advanced interpersonal and collaborative skills\nHashtag: #aministration\n--\nPost: Capacity to grasp new concepts quickly and efficiently, effectively applying extensive scientific and research knowledge. \nHashtag: #innovative\n--\nPost: Conducted literature reviews and maintained over 300 citation databases. \nHashtag: #literature\n--\nPost: ﻿Designed and implemented study procedures, including the selection of appropriate epidemiological methods for identifying study cohorts, creation of datasets for analysis and ensuring data quality and confidentiality. \nHashtag: #science\n--\nPost: Accomplished manufacturing and distribution of products in compliance with the current Good Manufacturing Practice (cGMP) and Good Laboratory Practice (GLP) regulations.\nHashtag: #qualityassurance\n--\nPost: Established telemedicine and pharmaceutical digital systems\nHashtag: #health\n--\nPost: Developed digital model of facial recognition software through machine learning.\nHashtag: #machinelearning\n--\nPost: Performed statistical analysis and regular computer program assessments to review negotiations, strategies, and decisions.\nHashtag: #statisticalanalysis\n--\nPost:',
    max_tokens: 10,
    temperature: 0.5,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  });
  console.log(`Prediction: ${response.body.generations[0].text}`);
})();