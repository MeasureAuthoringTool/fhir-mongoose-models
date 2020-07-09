const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationNameOfficialSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationNameOfficialSchema.add(BackboneElementSchema);
SubstanceSpecificationNameOfficialSchema.remove('id');
SubstanceSpecificationNameOfficialSchema.add({
  authority: CodeableConceptSchema,
  status: CodeableConceptSchema,
  date: PrimitiveDateTimeSchema,
});

module.exports.SubstanceSpecificationNameOfficialSchema = SubstanceSpecificationNameOfficialSchema;
