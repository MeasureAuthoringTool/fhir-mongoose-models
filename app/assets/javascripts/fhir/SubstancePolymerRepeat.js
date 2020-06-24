const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstancePolymerRepeatRepeatUnitSchema } = require('./SubstancePolymerRepeatRepeatUnit');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstancePolymerRepeatSchema = BackboneElementSchemaFunction({
   numberOfUnits : Number,
   averageMolecularFormula : String,
   repeatUnitAmountType : CodeableConceptSchema,
   repeatUnit : [SubstancePolymerRepeatRepeatUnitSchema],
   fhirTitle: { type: String, default: 'SubstancePolymerRepeat' },
});

class SubstancePolymerRepeat extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatSchema);
    this._type = 'FHIR::SubstancePolymerRepeat';
  }
};


module.exports.SubstancePolymerRepeatSchema = SubstancePolymerRepeatSchema;
module.exports.SubstancePolymerRepeat = SubstancePolymerRepeat;
