const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstanceAmountSchema } = require('./SubstanceAmount');

const SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema = BackboneElementSchemaFunction({
  degree: CodeableConceptSchema,
  amount: SubstanceAmountSchema,
  typeName: { type: String, default: 'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation' },
  _type: { type: String, default: 'FHIR::SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation' },
});

class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema);
    this.typeName = 'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation';
    this._type = 'FHIR::SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation';
  }
}

module.exports.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema = SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema;
module.exports.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
