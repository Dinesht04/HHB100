const mongoose = require('mongoose')

const DiseaseSchema = new mongoose.Schema({
    Disease:{
        type: String,
        required: true
    },
    Symptoms:{
        type: String,
        required: true
    },
    
    Overview:{
        type: String,
        required: true
    },
    Diagnosis:{
        type: String,
        required: true
    },
    TreatmentOptions:{
        type: String,
        required: true
    },
    MadeWorseBy:{
        type: String,
        required: true
    },
    WhentoSeeaDoctor:{
        type: String,
        required: true
    },
    WhattoAskaDoctor:{
        type: String,
        required: true
    },
    WhattoExpect:{
        type: String,
        required: true
    },
    Criticalness:{
        type: Number,
        required: true
    }

});

const DiseaseModel = mongoose.model("diseases",DiseaseSchema);

module.exports = DiseaseModel;