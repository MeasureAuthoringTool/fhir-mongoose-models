const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductSpecialDesignationSchema = BackboneElementSchemaFunction({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  intendedUse: CodeableConceptSchema,
  indicationCodeableConcept: CodeableConceptSchema,
  indicationReference: ReferenceSchema,
  status: CodeableConceptSchema,
  date: PrimitiveDateTimeSchema,
  species: CodeableConceptSchema,
  typeName: { type: String, default: 'MedicinalProductSpecialDesignation' },
  _type: { type: String, default: 'FHIR::MedicinalProductSpecialDesignation' },
});

class MedicinalProductSpecialDesignation extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductSpecialDesignationSchema);
    this.typeName = 'MedicinalProductSpecialDesignation';
    this._type = 'FHIR::MedicinalProductSpecialDesignation';
  }
}

module.exports.MedicinalProductSpecialDesignationSchema = MedicinalProductSpecialDesignationSchema;
module.exports.MedicinalProductSpecialDesignation = MedicinalProductSpecialDesignation;
