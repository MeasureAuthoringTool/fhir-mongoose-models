const { ElementSchema } = require('./Element');
const { PropertyRepresentationSchema } = require('./allSchemaHeaders.js');

PropertyRepresentationSchema.add(ElementSchema);
PropertyRepresentationSchema.remove('id');
PropertyRepresentationSchema.add({
  value: String,
});

module.exports.PropertyRepresentationSchema = PropertyRepresentationSchema;
