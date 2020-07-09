const { ElementSchema } = require('./Element');
const { ImagingStudyStatusSchema } = require('./allSchemaHeaders.js');

ImagingStudyStatusSchema.add(ElementSchema);
ImagingStudyStatusSchema.remove('id');
ImagingStudyStatusSchema.add({
  value: String,
});

module.exports.ImagingStudyStatusSchema = ImagingStudyStatusSchema;
