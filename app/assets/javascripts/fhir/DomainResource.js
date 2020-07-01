const mongoose = require('mongoose/browser');
const { ExtensionSchema } = require('./Extension');
const { NarrativeSchema } = require('./Narrative');
const { ResourceSchema } = require('./Resource');
const { ResourceSchemaFunction } = require('./Resource');

const DomainResourceSchema = ResourceSchemaFunction({
  text: NarrativeSchema,
  contained: [ResourceSchema],
  extension: [ExtensionSchema],
  modifierExtension: [ExtensionSchema],
  typeName: { type: String, default: 'DomainResource' },
  _type: { type: String, default: 'FHIR::DomainResource' },
});

class DomainResource extends mongoose.Document {
  constructor(object) {
    super(object, DomainResourceSchema);
    this.typeName = 'DomainResource';
    this._type = 'FHIR::DomainResource';
  }
}

function DomainResourceSchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    text: NarrativeSchema,
    contained: [ResourceSchema],
    extension: [ExtensionSchema],
    modifierExtension: [ExtensionSchema],
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.DomainResourceSchemaFunction = DomainResourceSchemaFunction;
module.exports.DomainResourceSchema = DomainResourceSchema;
module.exports.DomainResource = DomainResource;
