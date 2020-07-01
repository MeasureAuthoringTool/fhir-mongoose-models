const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const ClaimProcedureSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  type: [CodeableConceptSchema],
  date: PrimitiveDateTimeSchema,
  procedureCodeableConcept: CodeableConceptSchema,
  procedureReference: ReferenceSchema,
  udi: [ReferenceSchema],
  typeName: { type: String, default: 'ClaimProcedure' },
  _type: { type: String, default: 'FHIR::ClaimProcedure' },
});

class ClaimProcedure extends mongoose.Document {
  constructor(object) {
    super(object, ClaimProcedureSchema);
    this.typeName = 'ClaimProcedure';
    this._type = 'FHIR::ClaimProcedure';
  }
}

module.exports.ClaimProcedureSchema = ClaimProcedureSchema;
module.exports.ClaimProcedure = ClaimProcedure;
