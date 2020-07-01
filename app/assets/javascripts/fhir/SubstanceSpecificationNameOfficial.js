const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');

const SubstanceSpecificationNameOfficialSchema = BackboneElementSchemaFunction({
  authority: CodeableConceptSchema,
  status: CodeableConceptSchema,
  date: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'SubstanceSpecificationNameOfficial' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationNameOfficial' },
});

class SubstanceSpecificationNameOfficial extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationNameOfficialSchema);
    this.typeName = 'SubstanceSpecificationNameOfficial';
    this._type = 'FHIR::SubstanceSpecificationNameOfficial';
  }
}

module.exports.SubstanceSpecificationNameOfficialSchema = SubstanceSpecificationNameOfficialSchema;
module.exports.SubstanceSpecificationNameOfficial = SubstanceSpecificationNameOfficial;
