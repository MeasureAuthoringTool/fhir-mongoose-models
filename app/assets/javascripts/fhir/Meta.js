const mongoose = require('mongoose/browser');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const MetaSchema = ElementSchemaFunction({
  versionId: PrimitiveIdSchema,
  lastUpdated: PrimitiveInstantSchema,
  source: PrimitiveUriSchema,
  profile: [PrimitiveCanonicalSchema],
  security: [CodingSchema],
  tag: [CodingSchema],
  typeName: { type: String, default: 'Meta' },
  _type: { type: String, default: 'FHIR::Meta' },
});

class Meta extends mongoose.Document {
  constructor(object) {
    super(object, MetaSchema);
    this.typeName = 'Meta';
    this._type = 'FHIR::Meta';
  }
}

module.exports.MetaSchema = MetaSchema;
module.exports.Meta = Meta;
