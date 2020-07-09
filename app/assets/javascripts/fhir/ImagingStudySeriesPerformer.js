const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImagingStudySeriesPerformerSchema } = require('./allSchemaHeaders.js');

ImagingStudySeriesPerformerSchema.add(BackboneElementSchema);
ImagingStudySeriesPerformerSchema.remove('id');
ImagingStudySeriesPerformerSchema.add({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
});

module.exports.ImagingStudySeriesPerformerSchema = ImagingStudySeriesPerformerSchema;
