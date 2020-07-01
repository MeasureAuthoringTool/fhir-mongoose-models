const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');

const MedicinalProductAuthorizationProcedureSchema = BackboneElementSchemaFunction({
  identifier: IdentifierSchema,
  type: CodeableConceptSchema,
  datePeriod: PeriodSchema,
  dateDateTime: PrimitiveDateTimeSchema,
  application: [MedicinalProductAuthorizationProcedureSchema],
  typeName: { type: String, default: 'MedicinalProductAuthorizationProcedure' },
  _type: { type: String, default: 'FHIR::MedicinalProductAuthorizationProcedure' },
});

class MedicinalProductAuthorizationProcedure extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductAuthorizationProcedureSchema);
    this.typeName = 'MedicinalProductAuthorizationProcedure';
    this._type = 'FHIR::MedicinalProductAuthorizationProcedure';
  }
}

module.exports.MedicinalProductAuthorizationProcedureSchema = MedicinalProductAuthorizationProcedureSchema;
module.exports.MedicinalProductAuthorizationProcedure = MedicinalProductAuthorizationProcedure;
