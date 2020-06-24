const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureSupplementalDataSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   usage : [CodeableConceptSchema],
   description : String,
   criteria : ExpressionSchema,
   fhirTitle: { type: String, default: 'MeasureSupplementalData' },
});

class MeasureSupplementalData extends mongoose.Document {
  constructor(object) {
    super(object, MeasureSupplementalDataSchema);
    this._type = 'FHIR::MeasureSupplementalData';
  }
};


module.exports.MeasureSupplementalDataSchema = MeasureSupplementalDataSchema;
module.exports.MeasureSupplementalData = MeasureSupplementalData;
