const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MetaSchema = ElementSchemaFunction({
   versionId : String,
   lastUpdated : DateTime,
   source : String,
   profile : [String],
   security : [CodingSchema],
   tag : [CodingSchema],
   fhirTitle: { type: String, default: 'Meta' },
});

class Meta extends mongoose.Document {
  constructor(object) {
    super(object, MetaSchema);
    this._type = 'FHIR::Meta';
  }
};


module.exports.MetaSchema = MetaSchema;
module.exports.Meta = Meta;
