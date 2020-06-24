const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { LinkageItemSchema } = require('./LinkageItem');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const LinkageSchema = DomainResourceSchemaFunction({
   active : Boolean,
   author : ReferenceSchema,
   item : [LinkageItemSchema],
   fhirTitle: { type: String, default: 'Linkage' },
});

class Linkage extends mongoose.Document {
  constructor(object) {
    super(object, LinkageSchema);
    this._type = 'FHIR::Linkage';
  }
};


module.exports.LinkageSchema = LinkageSchema;
module.exports.Linkage = Linkage;
