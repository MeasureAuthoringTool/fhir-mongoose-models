const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CoverageClassSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  value: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  typeName: { type: String, default: 'CoverageClass' },
  _type: { type: String, default: 'FHIR::CoverageClass' },
});

class CoverageClass extends mongoose.Document {
  constructor(object) {
    super(object, CoverageClassSchema);
    this.typeName = 'CoverageClass';
    this._type = 'FHIR::CoverageClass';
  }
}

module.exports.CoverageClassSchema = CoverageClassSchema;
module.exports.CoverageClass = CoverageClass;
