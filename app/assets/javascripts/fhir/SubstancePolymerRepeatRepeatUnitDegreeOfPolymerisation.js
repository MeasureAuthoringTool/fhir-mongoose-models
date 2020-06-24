const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstanceAmountSchema } = require('./SubstanceAmount');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema = BackboneElementSchemaFunction({
   degree : CodeableConceptSchema,
   amount : SubstanceAmountSchema,
   fhirTitle: { type: String, default: 'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation' },
});

class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema);
    this._type = 'FHIR::SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation';
  }
};


module.exports.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema = SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema;
module.exports.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
