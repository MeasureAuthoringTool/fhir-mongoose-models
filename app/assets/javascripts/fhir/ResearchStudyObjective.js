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

const ResearchStudyObjectiveSchema = BackboneElementSchemaFunction({
   name : String,
   type : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ResearchStudyObjective' },
});

class ResearchStudyObjective extends mongoose.Document {
  constructor(object) {
    super(object, ResearchStudyObjectiveSchema);
    this._type = 'FHIR::ResearchStudyObjective';
  }
};


module.exports.ResearchStudyObjectiveSchema = ResearchStudyObjectiveSchema;
module.exports.ResearchStudyObjective = ResearchStudyObjective;
