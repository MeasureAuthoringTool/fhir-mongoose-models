const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstanceAmountSchema } = require('./SubstanceAmount');
const { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema } = require('./SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation');
const { SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema } = require('./SubstancePolymerRepeatRepeatUnitStructuralRepresentation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstancePolymerRepeatRepeatUnitSchema = BackboneElementSchemaFunction({
   orientationOfPolymerisation : CodeableConceptSchema,
   repeatUnit : String,
   amount : SubstanceAmountSchema,
   degreeOfPolymerisation : [SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema],
   structuralRepresentation : [SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema],
   fhirTitle: { type: String, default: 'SubstancePolymerRepeatRepeatUnit' },
});

class SubstancePolymerRepeatRepeatUnit extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatRepeatUnitSchema);
    this._type = 'FHIR::SubstancePolymerRepeatRepeatUnit';
  }
};


module.exports.SubstancePolymerRepeatRepeatUnitSchema = SubstancePolymerRepeatRepeatUnitSchema;
module.exports.SubstancePolymerRepeatRepeatUnit = SubstancePolymerRepeatRepeatUnit;
