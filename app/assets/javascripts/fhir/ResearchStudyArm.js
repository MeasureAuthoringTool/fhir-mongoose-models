const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResearchStudyArmSchema = BackboneElementSchemaFunction({
   name : String,
   type : CodeableConceptSchema,
   description : String,
   fhirTitle: { type: String, default: 'ResearchStudyArm' },
});

class ResearchStudyArm extends mongoose.Document {
  constructor(object) {
    super(object, ResearchStudyArmSchema);
    this._type = 'FHIR::ResearchStudyArm';
  }
};


module.exports.ResearchStudyArmSchema = ResearchStudyArmSchema;
module.exports.ResearchStudyArm = ResearchStudyArm;
