const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { LinkageTypeSchema } = require('./LinkageType');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const LinkageItemSchema = BackboneElementSchemaFunction({
   type : LinkageTypeSchema,
   resource : ReferenceSchema,
   fhirTitle: { type: String, default: 'LinkageItem' },
});

class LinkageItem extends mongoose.Document {
  constructor(object) {
    super(object, LinkageItemSchema);
    this._type = 'FHIR::LinkageItem';
  }
};


module.exports.LinkageItemSchema = LinkageItemSchema;
module.exports.LinkageItem = LinkageItem;
