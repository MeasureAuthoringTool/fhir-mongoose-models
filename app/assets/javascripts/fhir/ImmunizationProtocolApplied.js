const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationProtocolAppliedSchema = BackboneElementSchemaFunction({
   series : String,
   authority : ReferenceSchema,
   targetDisease : [CodeableConceptSchema],
   doseNumberPositiveInt : Number,
   doseNumberString : String,
   seriesDosesPositiveInt : Number,
   seriesDosesString : String,
   fhirTitle: { type: String, default: 'ImmunizationProtocolApplied' },
});

class ImmunizationProtocolApplied extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationProtocolAppliedSchema);
    this._type = 'FHIR::ImmunizationProtocolApplied';
  }
};


module.exports.ImmunizationProtocolAppliedSchema = ImmunizationProtocolAppliedSchema;
module.exports.ImmunizationProtocolApplied = ImmunizationProtocolApplied;
