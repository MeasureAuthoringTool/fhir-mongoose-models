const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DosageDoseAndRateSchema } = require('./DosageDoseAndRate');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DosageSchema = BackboneElementSchemaFunction({
   sequence : Number,
   text : String,
   additionalInstruction : [CodeableConceptSchema],
   patientInstruction : String,
   timing : TimingSchema,
   asNeededBoolean : Boolean,
   asNeededCodeableConcept : CodeableConceptSchema,
   site : CodeableConceptSchema,
   route : CodeableConceptSchema,
   method : CodeableConceptSchema,
   doseAndRate : [DosageDoseAndRateSchema],
   maxDosePerPeriod : RatioSchema,
   maxDosePerAdministration : SimpleQuantitySchema,
   maxDosePerLifetime : SimpleQuantitySchema,
   fhirTitle: { type: String, default: 'Dosage' },
});

class Dosage extends mongoose.Document {
  constructor(object) {
    super(object, DosageSchema);
    this._type = 'FHIR::Dosage';
  }
};


module.exports.DosageSchema = DosageSchema;
module.exports.Dosage = Dosage;
