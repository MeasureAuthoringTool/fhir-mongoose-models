const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ValueSetComposeIncludeConceptDesignationSchema } = require('./ValueSetComposeIncludeConceptDesignation');

const ValueSetComposeIncludeConceptSchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  designation: [ValueSetComposeIncludeConceptDesignationSchema],
  typeName: { type: String, default: 'ValueSetComposeIncludeConcept' },
  _type: { type: String, default: 'FHIR::ValueSetComposeIncludeConcept' },
});

class ValueSetComposeIncludeConcept extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeConceptSchema);
    this.typeName = 'ValueSetComposeIncludeConcept';
    this._type = 'FHIR::ValueSetComposeIncludeConcept';
  }
}

module.exports.ValueSetComposeIncludeConceptSchema = ValueSetComposeIncludeConceptSchema;
module.exports.ValueSetComposeIncludeConcept = ValueSetComposeIncludeConcept;
